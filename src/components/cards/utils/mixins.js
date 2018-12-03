
import { requireDocumentProperty } from '@/js/properties-mixins'

import CardContainer from './CardContainer'
import CardRegionItem from './CardRegionItem'
import CardElevationItem from './CardElevationItem'
import CardActivitiesItem from './CardActivitiesItem'

export const cardMixin = {

    components: {
        CardContainer,
        CardRegionItem,
        CardElevationItem,
        CardActivitiesItem,
    },
}

export const documentCardMixin = {
    mixins : [cardMixin, requireDocumentProperty],

}
