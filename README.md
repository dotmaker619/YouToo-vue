# [Vue Argon Dashboard PRO](https://github.com/creativetimofficial/ct-vue-argon-dashboard-pro) [![version][version-badge]][CHANGELOG] [![license][license-badge]][LICENSE]


## Documentation
The documentation for the Vue Argon Dashboard is hosted at our [website](https://demos.creative-tim.com/vue-argon-dashboard-pro/documentation?ref=vadap-github-readme).


## File Structure
Within the download you'll find the following directories and files:

```
|-- vue-argon-dashboard-pro
    |-- App.vue
    |-- main.js
    |-- polyfills.js
    |-- assets
    |   |-- css
    |   |   |-- nucleo
    |   |-- sass
    |       |-- argon.scss
    |       |-- core
    |       |-- custom
    |-- components
    |   |-- Badge.vue
    |   |-- BaseAlert.vue
    |   |-- BaseButton.vue
    |   |-- BaseDropdown.vue
    |   |-- BaseHeader.vue
    |   |-- BasePagination.vue
    |   |-- BaseProgress.vue
    |   |-- BaseSwitch.vue
    |   |-- BaseTable.vue
    |   |-- CloseButton.vue
    |   |-- LoadingPanel.vue
    |   |-- Modal.vue
    |   |-- NavbarToggleButton.vue
    |   |-- Slider.vue
    |   |-- index.js
    |   |-- Breadcrumb
    |   |   |-- Breadcrumb.vue
    |   |   |-- BreadcrumbItem.vue
    |   |   |-- RouteBreadcrumb.vue
    |   |-- Cards
    |   |   |-- Card.vue
    |   |   |-- StatsCard.vue
    |   |-- Charts
    |   |   |-- BarChart.js
    |   |   |-- DoughnutChart.js
    |   |   |-- LineChart.js
    |   |   |-- PieChart.js
    |   |   |-- config.js
    |   |   |-- globalOptionsMixin.js
    |   |   |-- optionHelpers.js
    |   |-- Collapse
    |   |   |-- Collapse.vue
    |   |   |-- CollapseItem.vue
    |   |-- Feed
    |   |   |-- Comment.vue
    |   |-- Inputs
    |   |   |-- BaseCheckbox.vue
    |   |   |-- BaseInput.vue
    |   |   |-- BaseRadio.vue
    |   |   |-- DropzoneFileUpload.vue
    |   |   |-- FileInput.vue
    |   |   |-- HtmlEditor.vue
    |   |   |-- IconCheckbox.vue
    |   |   |-- TagsInput.vue
    |   |-- Navbar
    |   |   |-- BaseNav.vue
    |   |   |-- NavbarToggleButton.vue
    |   |-- NotificationPlugin
    |   |   |-- Notification.vue
    |   |   |-- Notifications.vue
    |   |   |-- index.js
    |   |-- SidebarPlugin
    |   |   |-- SideBar.vue
    |   |   |-- SidebarItem.vue
    |   |   |-- index.js
    |   |-- Tabs
    |   |   |-- Tab.vue
    |   |   |-- Tabs.vue
    |   |-- Timeline
    |   |   |-- TimeLine.vue
    |   |   |-- TimeLineItem.vue
    |   |-- WorldMap
    |       |-- AsyncWorldMap.vue
    |       |-- WorldMap.vue
    |-- directives
    |   |-- click-ouside.js
    |-- plugins
    |   |-- dashboard-plugin.js
    |   |-- globalComponents.js
    |   |-- globalDirectives.js
    |-- routes
    |   |-- router.js
    |   |-- routes.js
    |   |-- starterRouter.js
    |-- util
    |   |-- throttle.js
    |-- views
        |-- Charts.vue
        |-- Widgets.vue
        |-- Calendar
        |   |-- Calendar.vue
        |-- Components
        |   |-- Buttons.vue
        |   |-- Cards.vue
        |   |-- GridSystem.vue
        |   |-- Icons.vue
        |   |-- Notifications.vue
        |   |-- Typography.vue
        |-- Dashboard
        |   |-- ActivityFeed.vue
        |   |-- AlternativeDashboard.vue
        |   |-- Dashboard.vue
        |   |-- LightTable.vue
        |   |-- PageVisitsTable.vue
        |   |-- ProgressTrackList.vue
        |   |-- SocialTrafficTable.vue
        |   |-- TaskList.vue
        |   |-- UserList.vue
        |-- Forms
        |   |-- FormComponents.vue
        |   |-- FormElements.vue
        |   |-- FormValidation.vue
        |   |-- FormValidation
        |       |-- BrowserDefaultsValidation.vue
        |       |-- CustomStylesValidation.vue
        |       |-- ServerSideValidation.vue
        |-- GeneralViews
        |   |-- NotFoundPage.vue
        |-- Layout
        |   |-- Content.vue
        |   |-- ContentFooter.vue
        |   |-- DashboardLayout.vue
        |   |-- DashboardNavbar.vue
        |-- Maps
        |   |-- API_KEY.js
        |   |-- GoogleMaps.vue
        |   |-- VectorMaps.vue
        |-- Pages
        |   |-- AuthLayout.vue
        |   |-- Home.vue
        |   |-- Lock.vue
        |   |-- Login.vue
        |   |-- Pricing.vue
        |   |-- Register.vue
        |   |-- TimeLinePage.vue
        |   |-- UserProfile.vue
        |   |-- UserProfile
        |       |-- EditProfileForm.vue
        |       |-- UserCard.vue
        |-- Starter
        |   |-- SampleFooter.vue
        |   |-- SampleLayout.vue
        |   |-- SampleNavbar.vue
        |   |-- SamplePage.vue
        |-- Tables
        |   |-- PaginatedTables.vue
        |   |-- RegularTables.vue
        |   |-- SortableTables.vue
        |   |-- projects.js
        |   |-- users.js
        |   |-- users2.js
        |   |-- PaginatedTables
        |   |   |-- clientPaginationMixin.js
        |   |-- RegularTables
        |       |-- CheckboxColoredTable.vue
        |       |-- CheckboxTable.vue
        |       |-- DarkTable.vue
        |       |-- InlineActionsTable.vue
        |       |-- LightTable.vue
        |       |-- StripedTable.vue
        |       |-- TranslucentTable.vue
        |-- Widgets
            |-- CalendarWidget.vue
            |-- CreditCard.vue
            |-- MembersCard.vue
            |-- PaypalCard.vue
            |-- ProgressTrackList.vue
            |-- StatsCards.vue
            |-- TaskList.vue
            |-- TimelineCard.vue
            |-- VectorMapCard.vue
            |-- VisaCard.vue

```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">



## Resources
- Demo: <https://demos.creative-tim.com/vue-argon-dashboard-pro/dashboard?ref=vadap-github-readme>
- Download Page: <https://www.creative-tim.com/product/vue-argon-dashboard-pro?ref=vadap-github-readme>
- Documentation: <https://demos.creative-tim.com/vue-argon-dashboard-pro/documentation?ref=vadap-github-readme>
- License Agreement: <https://www.creative-tim.com/license?ref=vadap-github-readme>
- Support: <https://www.creative-tim.com/contact-us?ref=vadap-github-readme>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/ct-vue-argon-dashboard-pro/issues?ref=vadap-github-readme)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Material Kit. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Material Kit. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/?ref=ada-github-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2018 Creative Tim (https://www.creative-tim.com/?ref=ada-github-readme)

- Licensed under MIT (https://github.com/creativetimofficial/vue-argon-dashboard/blob/master/LICENSE.md)

## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w?ref=creativetim)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=ada-github-readme) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/?ref=ada-github-readme)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free?ref=ada-github-readme) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=ada-github-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes?ref=ada-github-readme) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes?ref=ada-github-readme) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes?ref=ada-github-readme) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes?ref=ada-github-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles?ref=ada-github-readme)

### Social Media

Twitter: <https://twitter.com/CreativeTim?ref=creativetim>

Facebook: <https://www.facebook.com/CreativeTim?ref=creativetim>

Dribbble: <https://dribbble.com/creativetim?ref=creativetim>

Instagram: <https://www.instagram.com/CreativeTimOfficial?ref=creativetim>
