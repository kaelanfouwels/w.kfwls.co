// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as Polaris from '@cloudscape-design/components'

export const PolarisPropertyFilter: Polaris.PropertyFilterProps.I18nStrings = {
    filteringAriaLabel: "your choice",
    dismissAriaLabel: "Dismiss",
    filteringPlaceholder: "Filter distributions by text, property or value",
    groupValuesText: "Values",
    groupPropertiesText: "Properties",
    operatorsText: "Operators",
    operationAndText: "and",
    operationOrText: "or",
    operatorLessText: "Less than",
    operatorLessOrEqualText: "Less than or equal",
    operatorGreaterText: "Greater than",
    operatorGreaterOrEqualText: "Greater than or equal",
    operatorContainsText: "Contains",
    operatorDoesNotContainText: "Does not contain",
    operatorEqualsText: "Equals",
    operatorDoesNotEqualText: "Does not equal",
    editTokenHeader: "Edit filter",
    propertyText: "Property",
    operatorText: "Operator",
    valueText: "Value",
    cancelActionText: "Cancel",
    applyActionText: "Apply",
    allPropertiesLabel: "All properties",
    tokenLimitShowMore: "Show more",
    tokenLimitShowFewer: "Show fewer",
    clearFiltersText: "Clear filters",
    removeTokenButtonAriaLabel: (token) => {
        return `Remove token ${token.propertyKey} ${token.operator} ${token.value}`;
    },
    enteredTextLabel: (text) => {
        return `Use: "${text}"`;
    },
};

export const PolarisTopNavigation: Polaris.TopNavigationProps.I18nStrings = {
    searchIconAriaLabel: "Search",
    searchDismissIconAriaLabel: "Close search",
    overflowMenuTriggerText: "More",
    overflowMenuTitleText: "All",
    overflowMenuBackIconAriaLabel: "Back",
    overflowMenuDismissIconAriaLabel: "Close menu",
};

export const PolarisPaginationProps: Polaris.PaginationProps.Labels = {
    nextPageLabel: "Next page",
    previousPageLabel: "Previous page",
    pageLabel: (pageNumber) => {
        return `Page ${pageNumber} of all pages`;
    },
};

export const PolarisAppLayout: Polaris.AppLayoutProps.Labels = {
    navigation: "Side navigation",
    navigationToggle: "Open side navigation",
    navigationClose: "Close side navigation",
    notifications: "Notifications",
    tools: "Help panel",
    toolsToggle: "Open help panel",
    toolsClose: "Close help panel",
};