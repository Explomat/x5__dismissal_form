import React, { Component } from 'react';
import Sheet from './Sheet';
import { ButtonPrimary } from './modules/button';
import { AlertDanger, AlertInfo } from './modules/alert';
//import keys from 'lodash/keys';
//import { post } from '../utils/ajax';
import { url } from '../config';
import { getUrlParams } from '../utils/url';
import mock from '../mock'; 

class App extends Component {

	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCloseError = this.handleCloseError.bind(this);
		this._isFieldsFilled = this._isFieldsFilled.bind(this);
		this.handleSheetChange = this.handleSheetChange.bind(this);

		this.state = {
			error: '',
			message: '',
			isFetching: true,
			isLoadingSubmit: false
		};
	}

	componentDidMount(){
		const sheets = mock || [];
		sheets.forEach(sh => {
			const fields = sh.fields || [];
			fields.forEach(field => {
				const entries = (field.entries || {}).entry || [];
				if (entries.filter(e => e.selected).length === 0
					&& entries.length > 0
				) {
					entries[0].selected = true;
				}
			});
		});

		this.setState({
			...this.state,
			isFetching: false,
			sheets
		});
	}

	handleCloseError(){
		this.setState({ error: '' });
	}

	handleSheetChange(id, fields){
		const { sheets } = this.state;
		this.setState({
			sheets: sheets.map(sh => {
				if (sh.id === id){
					return {
						...sh,
						fields
					};
				}
				return sh;
			})
		});
	}

	handleSubmit(e){
		e.preventDefault();
		const pdata = this._prepareDataBeforeRequest(this.state);
		console.log(pdata);
		/*if (!this._isFieldsFilled()){
			this.setState({ error: 'Поля, помеченные звездочкой* должны быть заполнены!' });
		} else {
			const form = this.refs.submitForm;
			const pdata = this._prepareDataBeforeRequest(this.state);
			this.setState({ isLoading: true });
			post(form.action, JSON.stringify(pdata))
			.then(res => JSON.parse(res))
			.then(data => {
				if (data.error){
					this.setState({
						isLoading: false,
						message: 'Произошла непредвиденна ошибка, обратитесь на study@x5.ru. \r\n' + data.error
					});
				} else {
					this.setState({
						isLoading: false,
						message: 'Спасибо за отзыв!'
					});
				}
			})
			.catch(err => {
				this.setState({
					isLoading: false,
					message: 'Произошла непредвиденна ошибка, обратитесь на study@x5.ru. \r\n' + err
				});
			});
		}*/
	}

	_prepareDataBeforeRequest(){
		return this.state.sheets.reduce((shf, shs) => {
			const fields = (shs.fields || []).reduce((f, s) => {
				switch (s.type) {
					case 'combo': {
						const entry = ((s.entries || {}).entry || []).filter(e => e.selected)[0];
						if (entry){
							f[s.name] = entry.value;
						}
						return f;
					}
					case 'string': {
						const val = s.value || '';
						if (val.toString().trim() !== ''){
							f[s.name] = val;
						}
						return f;
					}
					case 'bool': {
						if (s.checked){
							f[s.name] = s.checked;
						}
						return f;
					}
					default: return f;
				}
			}, {});
			return {
				...shf,
				...fields
			};
		}, {});
	}

	_isFieldsFilled(){
		const { sheets } = this.state;
		const sheetsWithConditions = sheets.filter(sh => sh.conditions !== undefined);

		const filteredSheets = sheetsWithConditions.filter(sh => {
			const conditions = Object.keys(sh.conditions);
			const filteredConditions =  conditions.filter(k => {
				switch (k) {
					case 'bool': {
						if (sh.conditions[k].required){
							const fieldTypes = (sh.fields || []).filter(f => f.type === k);
							const filteredfields = fieldTypes.filter(f => f.checked);
							if (sh.conditions[k].length !== undefined){
								return sh.conditions[k].length === filteredfields.length;
							}
							return filteredfields.length === fieldTypes.length;
						}
						return true;
					}
					case 'string': {
						if (sh.conditions[k].required){
							const fieldTypes = (sh.fields || []).filter(f => f.type === k);
							const filteredfields = fieldTypes.filter(f => {
								const val = f.value || '';
								return val.toString().trim() !== '';
							});
							return filteredfields.length === fieldTypes.length;
						}
						return true;
					}
					default: return true;
				}
			});
			return filteredConditions.length === conditions.length;
		});

		return filteredSheets.length === sheetsWithConditions.length;
	}

	render(){
		const {
			error,
			message,
			isFetching,
			isLoadingSubmit,
			sheets
		} = this.state;

		if (isFetching){
			return <div className='overlay-loading overlay-loading--show' />;
		}

		const loadingClasses = isLoadingSubmit ?
			'overlay-loading overlay-loading--show body__loading' :
			'overlay-loading';
		const urlParams = getUrlParams(window.location.href);
		return (
			<form
				ref='submitForm'
				action={url.createPath({ server_name: 'dismissal_form', action_name: 'Submit', ...urlParams })}
				onSubmit={this.handleSubmit}
			>
				<div className='dismissal-form'>
					<div className='header'>
						<div className='container'>
							<a className='clearfix header__link' href={window.location.href}>
								<div className='logo' />
							</a>
						</div>
					</div>
					<div className='body'>
						<div className={loadingClasses} />
						{message ?
							<div className='container'>
								<AlertInfo isClose={false} text={message} />
							</div> :
							<div className='container'>
								<div className='body__title'>
									Уважаемый коллега! К сожалению, Вы покидаете нашу компанию.<br/><br/>
									Для улучшения условий работы компании просим Вас ответить на несколько вопросов анкеты, отметив<br/>
									подходящие для вас ответы, либо предложив свой вариант ответа. Данная анкета будет храниться
									в архиве и не<br/>подлежит разглашению.
								</div>
								<div className='body_paragraphs'>
									{sheets.map(sh => <Sheet key={sh.id} {...sh} onChange={this.handleSheetChange}/>)}
								</div>
							</div>
						}
					</div>
					{!message &&
						<div className='footer'>
							<div className='container'>
								{error && <AlertDanger text={error} onClose={this.handleCloseError}/>}
								<ButtonPrimary
									type='submit'
									text='Завершить заполнение'
									className='footer__submit-button'
								/>
							</div>
						</div>
					}
				</div>
			</form>
		);
	}
}

export default App;