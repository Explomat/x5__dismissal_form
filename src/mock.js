const state = [
	{
		'id': 'hkpmx',
		'name': 'work_experience',
		'title': 'Ваш стаж на текущем месте работы на момент увольнения *(выберите один вариант ответа)',
		'conditions': {
			'bool': {
				'required': true,
				'length': 1
			}
		},
		'fields': [
			{
				'name': 'we__less_3_months',
				'type': 'bool',
				'title': 'Менее 3х месяцев',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'hkpmx',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'we__3_to_6_months',
				'type': 'bool',
				'title': 'От 3х месяцев до полугода включительно',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'hkpmx',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'we__half_to_1_year',
				'type': 'bool',
				'title': 'От полугода до 1 года включительно',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'hkpmx',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'we__1_to_1_5_years',
				'type': 'bool',
				'title': 'От года до 1.5 лет включительно',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'hkpmx',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'we__1_5_to_3_years',
				'type': 'bool',
				'title': 'От 1.5 лет до 3 лет включительно',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'hkpmx',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'we__3_to_6_years',
				'type': 'bool',
				'title': 'От 3 до 6 лет включительно',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'hkpmx',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'we__more_6_years',
				'type': 'bool',
				'title': 'Более 6 лет',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'hkpmx',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			}
		]
	},
	{
		'id': '2dsrx',
		'name': 'position',
		'title': 'Ваша должность *',
		'conditions': undefined,
		'fields': [
			{
				'name': 'position',
				'type': 'combo',
				'title': 'Выберите должность',
				'catalog': '',
				'set_value_action': '',
				'entries': {
					'entry': [
						{
							'value': 'Администратор торгового зала'
						},
						{
							'value': 'Ведущий товаровед'
						},
						{
							'value': 'Заведующий производством'
						},
						{
							'value': 'Кассир-продавец'
						},
						{
							'value': 'Менеджер расчетно-кассового узла'
						},
						{
							'value': 'Менеджер свежих продуктов'
						},
						{
							'value': 'Начальник пекарного производства'
						},
						{
							'value': 'Пекарь'
						},
						{
							'value': 'Пиццмейкер'
						},
						{
							'value': 'Повар производства'
						},
						{
							'value': 'Повар производства-обвальщик'
						},
						{
							'value': 'Повар салатного производства'
						},
						{
							'value': 'Повар суши'
						},
						{
							'value': 'Продавец-кассир'
						},
						{
							'value': 'Продавец-консультант'
						},
						{
							'value': 'Продавец-пекарь'
						},
						{
							'value': 'Специалист ОКЗиЦ'
						},
						{
							'value': 'Специалист по заказу и приемке товара'
						},
						{
							'value': 'Старший кассир'
						},
						{
							'value': 'Старший пекарь'
						},
						{
							'value': 'Старший повар производства'
						},
						{
							'value': 'Старший продавец ФРОВ'
						},
						{
							'value': 'Технолог по хлебу'
						}
					]
				},
				'sheet_id': '2dsrx',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			}
		]
	},
	{
		'id': 'zm874',
		'name': 'not_like',
		'title': 'Отметьте, пожалуйста, галочкой 3 пункта, которые Вам больше всего НЕ нравились в Компании *',
		'conditions': {
			'bool': {
				'required': true,
				'length': 3
			}
		},
		'fields': [
			{
				'name': 'nl__team_attitude',
				'type': 'bool',
				'title': 'Отношения в коллективе',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__disrespect',
				'type': 'bool',
				'title': 'Грубое, неуважительное отношение руководства магазина к персоналу',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__living_conditions',
				'type': 'bool',
				'title': 'Бытовые условия (холодно/жарко/не работает туалет/состояние столовой)',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__equipment',
				'type': 'bool',
				'title': 'Оборудование сильно устарело/его не хватает/неисправно',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__organization',
				'type': 'bool',
				'title': 'Организация работы в магазине (перебрасывают из отдела в отдел, много недоделанных задач)',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__schedule',
				'type': 'bool',
				'title': 'Неудобный график работы',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__load',
				'type': 'bool',
				'title': 'Чрезмерная нагрузка/темп работы',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__reprocessing_not_paid',
				'type': 'bool',
				'title': 'Переработки не оплачивается',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__heavy',
				'type': 'bool',
				'title': 'Физически тяжелая работа (приходится самим носить тяжести и пр.)',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__low_salary',
				'type': 'bool',
				'title': 'Размер зарплаты ниже, чем в аналогичных компаниях',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__conditions_salary',
				'type': 'bool',
				'title': 'Непонятно, из чего складывается зарплата',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__buy_products',
				'type': 'bool',
				'title': 'Сотрудников принуждают покупать товар(по акции на кассе/просроченный/платить за украденный)',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__social_package',
				'type': 'bool',
				'title': 'Нет хорошего социального пакета',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__not_independence',
				'type': 'bool',
				'title': 'Отсутствие полномочий и самостоятельности принятия решений',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'nl__not_career',
				'type': 'bool',
				'title': 'Отсутствие карьерного роста',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'zm874',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			}
		]
	},
	{
		'id': 'y2dh7',
		'name': 'time_to_work',
		'title': 'Через какое время вы планируете выйти на новую работу? *(выберите один вариант ответа)',
		'conditions': {
			'bool': {
				'required': true,
				'length': 1
			}
		},
		'fields': [
			{
				'name': 'ttw__not_planned',
				'type': 'bool',
				'title': 'Не планирую в ближайшее время',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'y2dh7',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'ttw__more_than_month',
				'type': 'bool',
				'title': 'Через месяц и более',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'y2dh7',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'ttw__in_month',
				'type': 'bool',
				'title': 'В течение месяца',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'y2dh7',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			}
		]
	},
	{
		'id': 'q563y',
		'name': 'leaving_company',
		'title': 'Если у вас есть желание, опишите, пожалуйста, более подробно,почему вы уходите из Компании.',
		'conditions': undefined,
		'fields': [
			{
				'name': 'leaving_company',
				'type': 'string',
				'title': '',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'q563y',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			}
		]
	},
	{
		'id': 'ju0gq',
		'name': 'return_to_company',
		'title': 'Готовы ли Вы вернуться обратно в Компанию через некоторое время? *(выберите один вариант ответа)',
		'conditions': {
			'bool': {
				'required': true,
				'length': 1
			}
		},
		'fields': [
			{
				'name': 'rtc__yes',
				'type': 'bool',
				'title': 'Да',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'ju0gq',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'rtc__yes_conditions',
				'type': 'bool',
				'title': 'Да, при условии',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'ju0gq',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'rtc__yes_conditions_text',
				'type': 'string',
				'title': 'Впишите, пожалуйста, условие',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'ju0gq',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			},
			{
				'name': 'rtc__no',
				'type': 'bool',
				'title': 'Нет',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'ju0gq',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			}
		]
	},
	{
		'id': 'pt3en',
		'name': 'fullname',
		'title': 'Ваше ФИО *',
		'conditions': {
			'string': {
				'required': true
			}
		},
		'fields': [
			{
				'name': 'fullname',
				'type': 'string',
				'title': '',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'pt3en',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			}
		]
	},
	{
		'id': 'c92h3',
		'name': 'shop_name',
		'title': 'Название магазина *',
		'conditions': {
			'string': {
				'required': true
			}
		},
		'fields': [
			{
				'name': 'shop_name',
				'type': 'string',
				'title': '',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'c92h3',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			}
		]
	},
	{
		'id': 'r94c6',
		'name': 'location',
		'title': 'Название населенного пункта *',
		'conditions': {
			'string': {
				'required': true
			}
		},
		'fields': [
			{
				'name': 'location',
				'type': 'string',
				'title': '',
				'catalog': '',
				'set_value_action': '',
				'entries': {},
				'sheet_id': 'r94c6',
				'flag_extended': '0',
				'indexed': '0',
				'in_catalog': '1',
				'hide_level': '0',
				'is_multiple': '0',
				'is_readonly': '0',
				'xquery_qual': '',
				'sub_fields': {},
				'control_elements': {}
			}
		]
	}
];

export default state;