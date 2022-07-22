import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {ImageDashboardService} from './image-dashboard-service.service';

interface newArray {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

@Component({
  selector: 'app-image-dashboard',
  templateUrl: './image-dashboard.component.html',
  styleUrls: ['./image-dashboard.component.css']
})

export class ImageDashboardComponent implements OnInit {
	response:any;
	imageList:any = new Array();

	constructor(private images:ImageDashboardService) {}
	
	getImages(value:any) {
		if(value == "")
			alert("Enter value in the search box");
		else {
			this.images.getImagesFromApi(value).subscribe(data => {
				this.response = data;
				this.imageList = this.response.hits;
			})
		}
	}

	ngOnInit(): void {};
}