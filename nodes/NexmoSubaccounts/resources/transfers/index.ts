import type { INodeProperties } from 'n8n-workflow';

export const transfersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					]
				}
			},
			"options": [
				{
					"name": "Retrieve Balance Transfers",
					"value": "Retrieve Balance Transfers",
					"action": "Retrieve list of balance transfers",
					"description": "Retrieve a list of balance transfers that have taken place for a primary account within a specified time period.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"api_key\"]}}/balance-transfers"
						}
					}
				},
				{
					"name": "Transfer Balance",
					"value": "Transfer Balance",
					"action": "Transfer balance",
					"description": "Transfer balance between a primary account and one of its subaccounts. Note that balance_available_for_transfer = |account_balance - credit_limit| of the source account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"api_key\"]}}/balance-transfers"
						}
					}
				},
				{
					"name": "Retrieve Credit Transfers",
					"value": "Retrieve Credit Transfers",
					"action": "Retrieve list of credit transfers",
					"description": "Retrieve a list of credit transfers that have taken place for a primary account within a specified time period.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"api_key\"]}}/credit-transfers"
						}
					}
				},
				{
					"name": "Transfer Credit",
					"value": "Transfer Credit",
					"action": "Transfer credit",
					"description": "Transfer credit limit between a primary account and one of its subaccounts.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"api_key\"]}}/credit-transfers"
						}
					}
				},
				{
					"name": "Transfer Number",
					"value": "Transfer Number",
					"action": "Transfer number",
					"description": "Transfer number from one account to another.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"api_key\"]}}/transfer-number"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{api_key}/balance-transfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Retrieve Balance Transfers"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"description": "ID of the primary account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Retrieve Balance Transfers"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start of the retrieval period.",
			"default": "2019-07-15T13:11:44Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Retrieve Balance Transfers"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"description": "End of the retrieval period. If absent then all transfers until now is returned.",
			"default": "2019-07-15T14:11:44Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Retrieve Balance Transfers"
					]
				}
			}
		},
		{
			"displayName": "Subaccount",
			"name": "subaccount",
			"description": "Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "subaccount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Retrieve Balance Transfers"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for basicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Retrieve Balance Transfers"
					]
				}
			}
		},
		{
			"displayName": "POST /{api_key}/balance-transfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Balance"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"description": "ID of the primary account",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Balance"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": "123.45",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Balance"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "7c9738e6",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Balance"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "This gets added to the audit log",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Balance"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "ad6dc56f",
			"routing": {
				"send": {
					"property": "to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Balance"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for basicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Balance"
					]
				}
			}
		},
		{
			"displayName": "GET /{api_key}/credit-transfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Retrieve Credit Transfers"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"description": "ID of the primary account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Retrieve Credit Transfers"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start of the retrieval period.",
			"default": "2019-07-15T13:11:44Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Retrieve Credit Transfers"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"description": "End of the retrieval period. If absent then all transfers until now is returned.",
			"default": "2019-07-15T14:11:44Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Retrieve Credit Transfers"
					]
				}
			}
		},
		{
			"displayName": "Subaccount",
			"name": "subaccount",
			"description": "Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "subaccount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Retrieve Credit Transfers"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for basicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Retrieve Credit Transfers"
					]
				}
			}
		},
		{
			"displayName": "POST /{api_key}/credit-transfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Credit"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"description": "ID of the primary account",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Credit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": "123.45",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Credit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "7c9738e6",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Credit"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "This gets added to the audit log",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Credit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "ad6dc56f",
			"routing": {
				"send": {
					"property": "to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Credit"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for basicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Credit"
					]
				}
			}
		},
		{
			"displayName": "POST /{api_key}/transfer-number",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Number"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"description": "ID of the primary account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Number"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"type": "string",
			"default": "GB",
			"routing": {
				"send": {
					"property": "country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Number"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "7c9738e6",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Number"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "number",
			"default": "23507703696",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Number"
					]
				}
			}
		},
		{
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "ad6dc56f",
			"routing": {
				"send": {
					"property": "to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Number"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for basicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Transfer Number"
					]
				}
			}
		},
];
