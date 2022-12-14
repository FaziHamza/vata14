import { Component, OnInit, Input } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() category;
  isMobileScreen: Boolean = false;
  notFound = `<svg xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  version="1.1" x="0px" y="0px" 
  viewBox="0 0 24 24" width="24" height="24" enable-background="new 206 206 100 100" xml:space="preserve"><polygon points="259.394,266.377 259.475,266.296 259.394,266.233 "/><polygon points="292.804,231.536 292.804,279.937 301.312,286.422 301.312,223.029 218.156,223.029 229.315,231.536 "/><path d="M259.394,266.377v-0.144l-3.789-2.889v10.791h5.371c2.34,0,4.521-0.68,6.358-1.85l-7.859-5.99L259.394,266.377z"/><polygon points="222.194,280.665 222.194,237.875 213.687,231.389 213.687,289.173 289.483,289.173 278.325,280.665 "/><path d="M242.155,262.269c0,5.868,4.259,10.738,9.855,11.694v-11.166l-9.383-9.346l-0.472-0.36V262.269z"/><path d="M266.651,238.065l-4.951,5.443l-4.269-5.443l-3.991,5.443l-5.093-5.443c-0.981,1.811-1.609,4.236-1.636,6.732l14.41,10.985  C269.327,253.06,269.478,243.28,266.651,238.065z"/><path d="M272.843,262.269v-9.287l-6.676,6.649l6.455,4.919C272.765,263.812,272.843,263.049,272.843,262.269z"/><polygon points="301.312,288.695 290.779,280.665 272.095,266.421 264.875,260.917 259.394,256.739 246.879,247.199   226.333,231.536 215.174,223.029 210.481,219.451 207,224.019 213.687,229.115 222.194,235.601 255.604,261.071 259.394,263.96   260.768,265.008 268.835,271.158 281.307,280.665 292.467,289.173 300.11,295 303.592,290.435 "/></svg>`;

  constructor(public appSize: AppSizeStateService) { }

  ngOnInit() {
  }

}
