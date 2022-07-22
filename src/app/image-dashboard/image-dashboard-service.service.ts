import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class ImageDashboardService {
	constructor(private http:HttpClient) {}

	getImagesFromApi(value:any) {
		return this.http.get('https://pixabay.com/api/?key=27966400-a364e04519d1d58b0106d082b&q=' + value + '&image_type=photo');
	}
}