import React from 'react'

import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import GoogleCalendarPlugin from '@fullcalendar/google-calendar'

import "@fullcalendar/list/main.css";
import '../styles/scss/_cfc.scss'

export default class Schedule extends React.Component {

    render() {
        return (

            <FullCalendar
                plugins={[ listPlugin, GoogleCalendarPlugin ]}
                initialView='listWeek'
                locale="ja"

                eventOrder="title"
                contentHeight="auto"

                headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                }}

                footerToolbar={{
                    left: 'prev',
                    right: 'next'
                }}

                buttonText={{
                    next: '>',
                    prev: '<'
                }}

                views={{
                    listWeek: {
                        listDayFormat: { day: 'numeric', weekday: 'narrow' },
                        listDaySideFormat: false
                    }
                }}

                navLinks={false}
                businessHours={true}
                editable={false}
                firstDay='1'


                dayCellContent={function(e) {
                    e.dayNumberText = e.dayNumberText.replace('日', '')
                }}



                eventClick={ function(info) {
                    let location = "";
                    var msg = "";
                    if ( info.event.extendedProps.location !== undefined ) {
                        location = info.event.extendedProps.location;
                    }
                    msg = "件名：" +
                        info.event.title +
                        "\n" +
                        "場所："
                        + location;
                    

                    alert(msg)
                    info.jsEvent.preventDefault();
                    if (info.event.url) {
                    }
                }}

                

                googleCalendarApiKey='AIzaSyAbxROeLBWbK9xs7VGm26Ql2JjpU2VONu0'
                events={{
                    googleCalendarId: '57kunjloinh68h73hug19l4tjg@group.calendar.google.com'
                }}

            />
        )
    }
}


