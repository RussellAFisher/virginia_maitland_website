import {Component} from '@angular/core';
import soloExhibitions from './solo-exhibitions.json';
import awardsGrantsHonors from './award-grants-honors.json';
import teachingExperience from './teaching-experience.json';
import projectsCollabs from './projects-collabs.json';

@Component({
  selector: 'app-professional-history',
  templateUrl: './professional-history.component.html',
  styleUrls: ['./professional-history.component.scss']
})
export class ProfessionalHistoryComponent {
  private formalEducation = [
    {
      date: '1964 - 1968',
      details: ['The Pennsylvania Academy of the Fine Arts, Philadelphia, PA']
    }
  ];

  public professionalHistory = [
    {
      section: 'Formal Education',
      data: this.formalEducation
    },
    {
      section: 'Awards, Grants, and Honors',
      data: awardsGrantsHonors
    },
    {
      section: 'Solo Exhibition',
      data: soloExhibitions
    },
    {
      section: 'Teaching Experience',
      data: teachingExperience
    },
    {
      section: 'Projects and Collaborations',
      data: projectsCollabs
    }
  ];
}
