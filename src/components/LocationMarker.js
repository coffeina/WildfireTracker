//import { Icon } from '@iconify/react';
import { Icon } from '@iconify/react'
//import locationIcon from '@iconify-icons/fire-alert'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ lat, lng, onClick }) => {
    return ( < div class = "location-marker"
        onClick = { onClick } >
        <Icon icon = { locationIcon } className = "location-Icon" / >
        </div>
    )
}

export default LocationMarker