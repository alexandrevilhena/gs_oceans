import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ocean',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ocean.component.html',
  styleUrl: './ocean.component.css'
})

export class OceanComponent implements OnInit{
  oceansData: any[] = [];

  constructor(private apiService:ApiService){}

  ngOnInit(): void{
      this.apiService.getOceanData().subscribe(data=>{
        this.oceansData = data;
      });
  }
}

