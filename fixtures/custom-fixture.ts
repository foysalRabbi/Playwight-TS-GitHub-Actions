

import {test as base } from "@playwright/test";
import TeamStoreCreate from "../pages/teamStoreCreate";
import NopOrderPlaceTeamStore from "../pages/orderPlacePage";
import SubmitForProductionPage from "../pages/submitForProductionPage";

type UIPages = {
    teamStore: TeamStoreCreate,
    orderPlace: NopOrderPlaceTeamStore,
    submitForProductionForFactory: SubmitForProductionPage

}

export const test = base.extend<UIPages>({

    teamStore: async({page},use) => {
        const team = new TeamStoreCreate(page);
        await use(team);
        
    },

    orderPlace: async({page},use) => {
        const nop = new NopOrderPlaceTeamStore(page);
        await use(nop);
        
    },
    
    submitForProductionForFactory: async({page},use) => {
        const factory = new SubmitForProductionPage(page);
        await use(factory);
        
    }



});