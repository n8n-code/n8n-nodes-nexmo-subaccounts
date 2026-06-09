import type { INodeProperties } from 'n8n-workflow';

export const subaccountManagementDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					]
				}
			},
			"options": [
				{
					"name": "Retrieve Subaccounts List",
					"value": "Retrieve Subaccounts List",
					"action": "Retrieve list of subaccounts",
					"description": "Get the information of all the subaccounts owned by the primary account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"api_key\"]}}/subaccounts"
						}
					}
				},
				{
					"name": "Create Sub Account",
					"value": "Create Sub Account",
					"action": "Create subaccount",
					"description": "Create a subaccount for a given primary account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"api_key\"]}}/subaccounts"
						}
					}
				},
				{
					"name": "Retrieve Subaccount",
					"value": "Retrieve Subaccount",
					"action": "Retrieve a subaccount",
					"description": "Get the information of a subaccount specified with its API key.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"api_key\"]}}/subaccounts/{{$parameter[\"subaccount_key\"]}}"
						}
					}
				},
				{
					"name": "Modify Subaccount",
					"value": "Modify Subaccount",
					"action": "Modify a subaccount",
					"description": "Change one or more properties of a subaccount.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/{{$parameter[\"api_key\"]}}/subaccounts/{{$parameter[\"subaccount_key\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{api_key}/subaccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					],
					"operation": [
						"Retrieve Subaccounts List"
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
						"Subaccount Management"
					],
					"operation": [
						"Retrieve Subaccounts List"
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
						"Subaccount Management"
					],
					"operation": [
						"Retrieve Subaccounts List"
					]
				}
			}
		},
		{
			"displayName": "POST /{api_key}/subaccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					],
					"operation": [
						"Create Sub Account"
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
						"Subaccount Management"
					],
					"operation": [
						"Create Sub Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Subaccount department A",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					],
					"operation": [
						"Create Sub Account"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": "Password123",
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					],
					"operation": [
						"Create Sub Account"
					]
				}
			}
		},
		{
			"displayName": "Use Primary Account Balance",
			"name": "use_primary_account_balance",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "use_primary_account_balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					],
					"operation": [
						"Create Sub Account"
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
						"Subaccount Management"
					],
					"operation": [
						"Create Sub Account"
					]
				}
			}
		},
		{
			"displayName": "GET /{api_key}/subaccounts/{subaccount_key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					],
					"operation": [
						"Retrieve Subaccount"
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
						"Subaccount Management"
					],
					"operation": [
						"Retrieve Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Key",
			"name": "subaccount_key",
			"required": true,
			"description": "ID of the subaccount",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					],
					"operation": [
						"Retrieve Subaccount"
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
						"Subaccount Management"
					],
					"operation": [
						"Retrieve Subaccount"
					]
				}
			}
		},
		{
			"displayName": "PATCH /{api_key}/subaccounts/{subaccount_key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					],
					"operation": [
						"Modify Subaccount"
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
						"Subaccount Management"
					],
					"operation": [
						"Modify Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Key",
			"name": "subaccount_key",
			"required": true,
			"description": "ID of the subaccount",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					],
					"operation": [
						"Modify Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Subaccount department B",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					],
					"operation": [
						"Modify Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Suspended",
			"name": "suspended",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "suspended",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					],
					"operation": [
						"Modify Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Use Primary Account Balance",
			"name": "use_primary_account_balance",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "use_primary_account_balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccount Management"
					],
					"operation": [
						"Modify Subaccount"
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
						"Subaccount Management"
					],
					"operation": [
						"Modify Subaccount"
					]
				}
			}
		},
];
