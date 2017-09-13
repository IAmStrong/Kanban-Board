import { ITask } from './task.model';
import { DataService } from '../services/data.service';
// import * as data from '../../assets/data/tasks.json';

// export class Tasks {
//     constructor(data: DataService) {
//         console.log('xxxx', data.getAllTasks());
//     }
// }

export const SAVED_TASKS: ITask[] = [
    {
        "id": 1,
        "name": "Perform upgrades",
        "description": "Upgrading is the process of replacing a product with a newer version of the same product. In computing and consumer electronics an upgrade is generally a replacement of hardware, software or firmware with a newer or better version, in order to bring the system up to date or to improve its characteristics.",
        "category": "To Do",
        "priority": "normal",
        "tag": "Travel App",
        "reporter": {
            "id": "ANCO0407",
            "name": "Ann Coulter",
            "email": "AnnCoulter@gmail.com"
        },
        "watchers": ["Jayden Bartels", "Ann Coulter"],
        "creation_date": "2017-04-21T06:50:21",
        "due_date": "2017-04-22T07:00:01",
        "estimated_time": "4h"
    },
    {
        "id": 2,
        "name": "Research tools",
        "description": "It gives them smart, time saving research tools and helps them deliver quality results in multiple levels. ATLAS.ti lets you collect, organize and analyze content from interviews, focus group discussions, surveys, audio, social media, videos and the Web.",
        "category": "To Do",
        "priority": "lowest",
        "tag": "Travel App",
        "reporter": {
            "id": "JAMO0712",
            "name": "James Morrison",
            "email": "JamesMorrison@gmail.com"
        },
        "watchers": ["Matthew Williamson", "James Morrison"],
        "creation_date": "2017-05-15T08:13:14",
        "due_date": "2017-05-16T06:05:14",
        "estimated_time": "2h"
    },
    {
        "id": 3,
        "name": "API returning error",
        "description": "If something goes wrong in an API request, an error or a warning will be thrown (although the HTTP response will usually still be 200 OK). Warnings are thrown for non-fatal conditions such as invalid parameters, whereas errors are only thrown for fatal conditions.",
        "category": "To Do",
        "priority": "highest",
        "tag": "XCode Project",
        "reporter": {
            "id": "ANCO0407",
            "name": "Ann Coulter",
            "email": "AnnCoulter@gmail.com"
        },
        "watchers": ["Jayden Bartels", "Ann Coulter"],
        "creation_date": "2017-03-13T07:52:24",
        "due_date": "2017-03-14T08:10:21",
        "estimated_time": "1d"
    },
    {
        "id": 4,
        "name": "IDs not working",
        "description": "I have set some ids and classes to various stuff. I just started on the footer and nothing I try works, same with the logo. When I apply stuff in my style sheet noting happens. I have looked over my CSS and HTMl files for any mistakes and have none. Any idea why it isn't working?",
        "category": {
            "plan": "active"
        },
        "priority": "highest",
        "tag": "Mediatec",
        "reporter": {
            "id": "ANCO0407",
            "name": "Ann Coulter",
            "email": "AnnCoulter@gmail.com"
        },
        "watchers": ["Jayden Bartels", "Ann Coulter"],
        "creation_date": "2017-04-17T12:51:25",
        "due_date": "2017-04-18T11:30:04",
        "estimated_time": "3h"
    },
    {
        "id": 5,
        "name": "Migrate systems",
        "description": "System migration involves moving a set of instructions or programs, e.g., PLC (programmable logic controller) programs, from one platform to another, minimizing reengineering. Migration of systems can also involve downtime, while the old system is replaced with a new one.",
        "category": {
            "plan": "complete"
        },
        "priority": "low",
        "tag": "XCode Project",
        "reporter": {
            "id": "DAMI1123",
            "name": "David Mitchell",
            "email": "DavidMitchell@gmail.com"
        },
        "watchers": ["Henry Moore", "David Mitchell"],        
        "creation_date": "2017-02-01T15:21:04",
        "due_date": "2017-02-03T13:18:41",
        "estimated_time": "2d"
    },
    {
        "id": 6,
        "name": "Minor improvement to SSL",
        "description": "SSL (Secure Sockets Layer) is the standard security technology for establishing an encrypted link between a web server and a browser. This link ensures that all data passed between the web server and browsers remain private and integral. SSL is an industry standard and is used by millions of websites in the protection of their online transactions with their customers.",
        "category": {
            "development": "active"
        },
        "priority": "lowest",
        "tag": "Travel App",
        "reporter": {
            "id": "DAMI1123",
            "name": "David Mitchell",
            "email": "DavidMitchell@gmail.com"
        },
        "watchers": ["Henry Moore", "David Mitchell"],        
        "creation_date": "2017-02-08T07:01:12",
        "due_date": "2017-02-09T06:03:20",
        "estimated_time": "0.5h"
    },
    {
        "id": 7,
        "name": "Confirmation screen error",
        "description": "When an admin tries to remove a group they are taken to a confirm screen that once displayed, among other things, the number of members, and allow those members to be moved to another group. Currently this is not being displayed, but an error is being logged.",
        "category": "Test",
        "priority": "high",
        "tag": "XCode Project",
        "reporter": {
            "id": "JAMO0712",
            "name": "James Morrison",
            "email": "JamesMorrison@gmail.com"
        },
        "watchers": ["Matthew Williamson", "James Morrison"],
        "creation_date": "2017-05-24T06:11:28",
        "due_date": "2017-05-25T08:14:06",
        "estimated_time": "4h"
    },
    {
        "id": 8,
        "name": "Add contact form",
        "description": "You can add a contact form to any page for gathering information from your site's visitors. The default form includes fields for name, email, subject and message. You can add more fields or edit the existing ones, though fully customizable forms are only available for Business or Business Plus plans.",
        "category": "To Do",
        "priority": "low",
        "tag": "Mediatec",
        "reporter": {
            "id": "DAMI1123",
            "name": "David Mitchell",
            "email": "DavidMitchell@gmail.com"
        },
        "watchers": ["Henry Moore", "David Mitchell"],
        "creation_date": "2017-07-29T17:24:31",
        "due_date": "2017-07-30T15:38:39",
        "estimated_time": "0.7h"
    },
    {
        "id": 9,
        "name": "MVVM core enhancements",
        "description": "The Model-View-ViewModel (MVVM) pattern helps to cleanly separate the business and presentation logic of an application from its user interface (UI). Maintaining a clean separation between application logic and the UI helps to address numerous development issues and can make an application easier to test, maintain, and evolve.",
        "category": {
            "plan": "active"
        },
        "priority": "high",
        "tag": "XCode Project",
        "reporter": {
            "id": "ANCO0407",
            "name": "Ann Coulter",
            "email": "AnnCoulter@gmail.com"
        },
        "watchers": ["Jayden Bartels", "Ann Coulter"],
        "creation_date": "2017-06-21T14:32:00",
        "due_date": "2017-06-25T13:01:55",
        "estimated_time": "4d"
    },
    {
        "id": 10,
        "name": "Modify report templates",
        "description": "Changes you make to report templates at the client level won't affect the practice-level report template, or other reports you run for that client. In the Reports menu, select All Reports to edit drafts or copy and edit published report templates you've saved for a client.",
        "category": {
            "development": "active"
        },
        "priority": "highest",
        "tag": "Travel App",
        "reporter": {
            "id": "ANCO0407",
            "name": "Ann Coulter",
            "email": "AnnCoulter@gmail.com"
        },
        "watchers": ["Jayden Bartels", "Ann Coulter"],
        "creation_date": "2017-03-23T18:27:01",
        "due_date": "2017-03-24T16:21:11",
        "estimated_time": "2h"
    },
    {
        "id": 11,
        "name": "Change the initial view",
        "description": "You want to change the default view that is opened when you create a new drawing. For example, you want the new drawing to be in 3D isometric view instead of plan view when first opened. This setting is saved in the template file that is used to create the new drawing. If the template file is saved in a 3D isometric view, then the new drawing will be opened in a 3D isometric view.",
        "category": {
            "development": "active"
        },
        "priority": "normal",
        "tag": "Mediatec",
        "reporter": {
            "id": "JAMO0712",
            "name": "James Morrison",
            "email": "JamesMorrison@gmail.com"
        },
        "watchers": ["Matthew Williamson", "James Morrison"],
        "creation_date": "2017-02-11T11:18:52",
        "due_date": "2017-02-12T06:08:12",
        "estimated_time": "1h"
    },
    {
        "id": 12,
        "name": "Add video chat interface",
        "description": "WebRTC enables an integrated video call experience within the context of any web or mobile application. Unlike Skype or FaceTime, WebRTC is not a separate application, but an extension of the browser. Unlike Unified Communication (UC) platforms WebRTC is easy to integrate into any application.",
        "category": {
            "development": "complete"
        },
        "priority": "normal",
        "tag": "Travel App",
        "reporter": {
            "id": "ANCO0407",
            "name": "Ann Coulter",
            "email": "AnnCoulter@gmail.com"
        },
        "watchers": ["Jayden Bartels", "Ann Coulter"],
        "creation_date": "2017-04-17T12:08:59",
        "due_date": "2017-04-18T11:10:13",
        "estimated_time": "1d"
    },
    {
        "id": 13,
        "name": "Homepage footer uses an inline style - should use a class",
        "description": "Inline styles, while they have a purpose, generally are not the best way to maintain your website. Instead of using inline styles, use external stylesheets. They give you all the benefits of CSS best practices and are easy to use. Employed in this way, all the styles used on your site live in a separate document that is then linked to a web document with a single line of code.",
        "category": "Test",
        "priority": "low",
        "tag": "Mediatec",
        "reporter": {
            "id": "DAMI1123",
            "name": "David Mitchell",
            "email": "DavidMitchell@gmail.com"
        },
        "watchers": ["Henry Moore", "David Mitchell"],
        "creation_date": "2017-05-24T07:03:18",
        "due_date": "2017-05-25T07:00:00",
        "estimated_time": "0.5h"
    },
    {
        "id": 14,
        "name": "Google Apps integration",
        "description": "Agile integrates with your favorite Google Apps to grow your business. By enabling access to your Google Calendar, Agile automatically syncs your events in your Google Calendar with Agile calendar. You can also setup Agile calendar inside Google making Agile a great google apps crm.",
        "category": "Deploy",
        "priority": "normal",
        "tag": "Mediatec",
        "reporter": {
            "id": "DAMI1123",
            "name": "David Mitchell",
            "email": "DavidMitchell@gmail.com"
        },
        "watchers": ["Henry Moore", "David Mitchell"],
        "creation_date": "2017-06-23T09:44:26",
        "due_date": "2017-06-24T08:31:25",
        "estimated_time": "3h"
    },
    {
        "id": 15,
        "name": "Parameter to control the length of the search",
        "description": "A search operator (sometimes referred to as a search parameter) is a character or string of characters used in a search engine query to narrow the focus of the search. Other search operators are usually placed directly in front of a query word or phrase, with no intervening space. Multiple operators can be combined in a query to further narrow the focus of a search.",
        "category": "Deploy",
        "priority": "lowest",
        "tag": "Travel App",
        "reporter": {
            "id": "JAMO0712",
            "name": "James Morrison",
            "email": "JamesMorrison@gmail.com"
        },
        "watchers": ["Matthew Williamson", "James Morrison"],
        "creation_date": "2017-07-19T09:51:12",
        "due_date": "2017-07-20T08:48:04",
        "estimated_time": "0.2h"
    },
    {
        "id": 16,
        "name": "Payroll API v2.1",
        "description": "The ADP Payroll API brings developers tools for Payroll Management and Services. This includes Pay Statements and Distributions, Tax Statements, ATM Locators, Paycard Funding Initiation, and more. ADP provides a comprehensive set of worker APIs to retrieve worker information, update worker information, and retrieve worker information change notifications in order to stay in sync with an ADP system.",
        "category": "Deploy",
        "priority": "high",
        "tag": "XCode Project",
        "reporter": {
            "id": "ANCO0407",
            "name": "Ann Coulter",
            "email": "AnnCoulter@gmail.com"
        },
        "watchers": ["Jayden Bartels", "Ann Coulter"],
        "creation_date": "2017-01-09T16:45:07",
        "due_date": "2017-01-11T14:22:27",
        "estimated_time": "2d"
    }
];

// https://www.youtube.com/watch?v=EHdSb279Lzg