import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommunityMashupApiPersonService } from '../communitymashup-api-person.service';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: any[] = [];

  constructor(private personService: CommunityMashupApiPersonService) { }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(data => {
      console.log(data); // Fügen Sie dies hinzu, um die abgerufenen Daten zu überprüfen
      this.persons = data.filter((person: any) => person.type === 'data:person');
      console.log(this.persons); // Überprüfen Sie, ob die Daten korrekt gefiltert wurden
    });
  }
}