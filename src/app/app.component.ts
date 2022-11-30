import { Component } from '@angular/core';
import {
  faPhoneFlip,
  faComment,
  faEnvelopeOpen,
  faInfo,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faPhoneFlip = faPhoneFlip;
  faEnvelopeOpen = faEnvelopeOpen;
  faComment = faComment;
  faInfo = faInfo;
  faBars = faBars;
  faTimes = faTimes;
  showMenu: boolean = false;

  title = 'office';
  bigObj = [
    {
      id: 1,
      title: 'Overview',
      isVisible: true,
      bodyHeader: 'What is Direct Debit',
      body1: 'What is the juice',
      body2: 'What is juice2',
      body3: 'What is juice3',
      body4: 'What is juice4',
      bodyMain: 'What is sub Direct Debit',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    
    {
      id: 2,
      title: 'Getting started',
      isVisible: false,
      bodyHeader: 'What is Direct Debit',
      body1: 'What is the juice',
      body2: 'What is juice2',
      body3: 'What is juice3',
      body4: 'What is juice4',
      bodyMain: 'What is sub Direct Debit',
      body: 'A iusto asperiores consequatur laudantium quo repellendus sed cum impedidebitis repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 3,
      title: 'Direct Debit',
      isVisible: false,
      bodyHeader: 'What is Direct Debit',
      body1: 'What is the juice',
      body2: 'What is juice2',
      body3: 'What is juice3',
      body4: 'What is juice4',
      bodyMain: 'What is sub Direct Debit',
      body: 'molestias expedita exercitationem incidunt voluptates      commodi praesentium laborum nulla adipisci, corrupti dicta.',
    },
    {
      id: 4,
      title: 'Developer api',
      isVisible: false,
      bodyHeader: 'How to Save',
      body1: 'What is the juice',
      body2: 'What is juice2',
      body3: 'What is juice3',
      body4: 'What is juice4',
      bodyMain: 'What is sub Direct Debit',
      body: 'Officiis quos temporibus aut, est ut voluptates a, exercitationem debitis incidunt maxime nostrum quis animi modi minima voluptas?.',
    },
    {
      id: 5,
      title: 'paylinks',
      isVisible: false,
      bodyHeader: 'How to Save',
      body1: 'What is the juice',
      body2: 'What is juice2',
      body3: 'What is juice3',
      body4: 'What is juice4',
      bodyMain: 'What is sub Direct Debit',
      body: 'Officiis quos temporibus aut, est ut voluptates a, exercitationem debitis incidunt maxime nostrum quis animi modi minima voluptas?.',
    },
    {
      id: 6,
      title: 'partners',
      isVisible: false,
      bodyHeader: 'How to Save',
      body1: 'What is the juice',
      body2: 'What is juice2',
      body3: 'What is juice3',
      body4: 'What is juice4',
      bodyMain: 'What is sub Direct Debit',
      body: 'Officiis quos temporibus aut, est ut voluptates a, exercitationem debitis incidunt maxime nostrum quis animi modi minima voluptas?.',
    },
    {
      id: 7,
      title: 'the customer experience',
      isVisible: false,
      bodyHeader: 'How to Save',
      body1: 'What is the juice',
      body2: 'What is juice2',
      body3: 'What is juice3',
      body4: 'What is juice4',
      bodyMain: 'What is sub Direct Debit',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perspiciatis et adipisci debitis consequatur  Officiis quos temporibus aut, est ut voluptates a, exercitationem debitis incidunt maxime nostrum quis animi modi minima voluptas?.',
    },
    {
      id: 8,
      title: 'security',
      isVisible: false,
      bodyHeader: 'How to Save',
      body1: 'What is the juice',
      body2: 'What is juice2',
      body3: 'What is juice3',
      body4: 'What is juice4',
      bodyMain: 'What is sub Direct Debit',
      body: 'Officiis quos temporibus aut, est ut voluptates a, praesentium, culpa ipsum id nostrum sapiente aliquam illo dicta natus porro veniam cum facilis dolorem? Laboriosam.exercitationem debitis incidunt maxime nostrum quis animi modi minima voluptas?.',
    },
    {
      id: 9,
      title: 'refunds and chargebacks',
      isVisible: false,
      bodyHeader: 'How to Save',
      body1: 'What is the juice',
      body2: 'What is juice2',
      body3: 'What is juice3',
      body4: 'What is juice4',
      bodyMain: 'What is sub Direct Debit',
      body: 'praesentium, culpa ipsum id nostrum sapiente aliquam illo dicta natus porro veniam cum facilis dolorem? Laboriosam. Officiis quos temporibus aut, est ut voluptates a, exercitationem debitis incidunt maxime nostrum quis animi modi minima voluptas?.',
    },
    {
      id: 10,
      title: 'international payments',
      isVisible: false,
      bodyHeader: 'How to Save',
      body1: 'What is the juice',
      body2: 'What is juice2',
      body3: 'What is juice3',
      body4: 'What is juice4',
      bodyMain: 'What is sub Direct Debit',
      body: 'Officiis quos temporibus aut, est ut voluptates a, praesentium, culpa ipsum id nostrum sapiente aliquam illo dicta natus porro veniam cum facilis dolorem? Laboriosam.? Officiis quos temporibus aut, est ut voluptates a, praesentium, culpa ipsum id nostrum sapiente aliquam illo dicta natus porro veniam cum facilis dolorem? Laboriosam.?.',
    },
  ];

  navLinks = [
    {
      id: 1,
      icon: faEnvelopeOpen,
      header: 'help@gocardless.com',
      subheader: '',
    },
    {
      id: 2,
      icon: faPhoneFlip,
      header: '020 7183 8674',
      subheader: '(9am-6pm Mon-Fri)',
    },
    {
      id: 3,
      icon: faComment,
      header: 'Developer chat room',
      subheader: '',
    },
    {
      id: 4,
      icon: faInfo,
      header: 'Help Center',
      subheader: '',
    },
  ];

  showSub(index: number) {
    this.bigObj.forEach((element) => {
      if (element.id === index) {
        element.isVisible = true;
        this.showMenu = false;
      } else element.isVisible = false;
    });
  }
}
