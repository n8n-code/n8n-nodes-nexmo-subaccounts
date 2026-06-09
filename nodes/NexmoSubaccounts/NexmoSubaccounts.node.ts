import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { subaccountManagementDescription } from './resources/subaccount-management';
import { transfersDescription } from './resources/transfers';

export class NexmoSubaccounts implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'nexmo-subaccounts',
		name: 'N8nDevNexmoSubaccounts',
		icon: { light: 'file:./nexmo-subaccounts.svg', dark: 'file:./nexmo-subaccounts.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Subaccounts API enables you to create subaccounts under your primary account. Subaccounts facilitate differential product configuration, reporting, and billing. The Subaccounts API is released ..',
		defaults: { name: 'nexmo-subaccounts' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNexmoSubaccountsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Subaccount Management",
					"value": "Subaccount Management",
					"description": "This section shows how you can create, retrieve and modify subaccounts of a primary account."
				},
				{
					"name": "Transfers",
					"value": "Transfers",
					"description": "This section shows how you execute credit, balance and number transfers, as well as viewing past transactions."
				}
			],
			"default": ""
		},
		...subaccountManagementDescription,
		...transfersDescription
		],
	};
}
