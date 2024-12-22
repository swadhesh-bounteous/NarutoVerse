import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character_types';
import { ActivatedRoute } from '@angular/router';
import { CharacterdetailsService } from '../../services/characterdetails.service';

@Component({
  selector: 'app-character-details',
  standalone: false,
  
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss'
})
export class CharacterDetailsComponent implements OnInit {
  character: Character = { id: '', name: 'Unknown', images: [] };  
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,  
    private characterDetailsService: CharacterdetailsService 
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');  
    if (id) {
      this.fetchCharacterDetails(id);
    }
  }

  fetchCharacterDetails(id: string): void {
    this.loading = true;
    this.characterDetailsService.getCharacterDetails(id).subscribe({
      next: (data) => {
        this.character = data;
        console.log(this.character);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch character details';
        this.loading = false;
      }
    });
  }
}
