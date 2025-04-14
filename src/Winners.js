import {
    WidgetContestantCompaniesArchiveWinners
} from 'eventjuicer-site-components'

export const Winners2025 = (props) =>  (<WidgetContestantCompaniesArchiveWinners 
    filter={ (data) => parseInt(data.event_id) === 106 }
    wrapperProps={{
        label : ["awards.winners.archive.title", {name: 2025}],
        secondaryLabel :[ "awards.winners.archive.description", {name: 2025, date: "2025"}],
      }}  
/>)

export const Winners2024 = (props) =>  (<WidgetContestantCompaniesArchiveWinners 
    filter={ (data) => parseInt(data.event_id) === 101 }
    wrapperProps={{
        label : ["awards.winners.archive.title", {name: 2024}],
        secondaryLabel :[ "awards.winners.archive.description", {name: 2024, date: "2024"}],
      }}  
/>)


export const Winners2023 = (props) =>  (<WidgetContestantCompaniesArchiveWinners 
    filter={ (data) => parseInt(data.event_id) === 98 }
    wrapperProps={{
        label : ["awards.winners.archive.title", {name: 2023}],
        secondaryLabel :[ "awards.winners.archive.description", {name: 2023, date: "2023"}],
      }}  
/>)


export const Winners2022 = (props) =>  (<WidgetContestantCompaniesArchiveWinners 
    filter={ (data) => parseInt(data.event_id) === 94 }
    wrapperProps={{
        label : ["awards.winners.archive.title", {name: 2022}],
        secondaryLabel :[ "awards.winners.archive.description", {name: 2022, date: "2022"}],
      }}  
/>)

export const Winners2021 = (props) =>  (<WidgetContestantCompaniesArchiveWinners 
    filter={ (data) => parseInt(data.event_id) === 91 }
    wrapperProps={{
        label : ["awards.winners.archive.title", {name: 2021}],
        secondaryLabel :[ "awards.winners.archive.description", {name: 2021, date: "2021"}],
      }}  
/>)


export const Winners2020 = (props) =>  (<WidgetContestantCompaniesArchiveWinners 
    filter={ (data) => parseInt(data.event_id) === 88 }
    wrapperProps={{
        label : ["awards.winners.archive.title", {name: 2020}],
        secondaryLabel : ["awards.winners.archive.description", {name: 2020, date: "2020"}],
    }}  
/>)

export const Winners2019 = (props) =>  (<WidgetContestantCompaniesArchiveWinners 
    filter={ (data) => parseInt(data.event_id) === 84 }
    wrapperProps={{
        label : ["awards.winners.archive.title", {name: 2019}],
        secondaryLabel : ["awards.winners.archive.description", {name: 2019, date: "2019"}],
    }}  
/>)


const AllWinners = () => (<><Winners2025 /><Winners2024 /><Winners2023 /><Winners2022 /><Winners2021 /><Winners2020 /><Winners2019 /></>)

export default AllWinners