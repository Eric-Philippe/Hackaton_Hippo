import {
  Component,
  Renderer2,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

import svgPanZoom from 'svg-pan-zoom';
import { CommonModule } from '@angular/common';

const DEFAULT_SVG_PAN_OPTIONS = {
  zoomEnabled: true,
  controlIconsEnabled: true,
  center: true,
  minZoom: 0.9,
  maxZoom: 10,
  zoomScaleSensitivity: 0.5,
  contain: true,
};

const SELECTED_GRAVE_COLOR = '#80EF80';

@Component({
  standalone: true,
  imports: [ButtonModule, TagModule],
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [],
})
export class MapComponent implements OnInit {
  constructor(private http: HttpClient, private renderer: Renderer2) {}

  ngOnInit() {
    this.loadSVG();
  }

  setupPanZoom(reset = false) {
    const svgElement = document.getElementById('gravemap-svg');
    if (svgElement) {
      const panZoomInstance = svgPanZoom(svgElement, DEFAULT_SVG_PAN_OPTIONS);
      if (reset) {
        panZoomInstance.reset();
      }

      panZoomInstance.zoom(1.5);
      panZoomInstance.pan({
        x: svgElement.clientWidth / 5,
        y: svgElement.clientHeight / 20,
      });
    }
  }

  private loadSVG() {
    this.http
      .get('/toulousemap.svg', { responseType: 'text' })
      .subscribe((svgContent) => {
        const svgContainer = document.getElementById('svg-container');
        if (svgContainer) {
          svgContainer.innerHTML = svgContent;
          const svgElement = svgContainer.querySelector('svg') as SVGElement;
          svgElement.id = 'gravemap-svg';
          svgElement.setAttribute('width', '100%');
          svgElement.setAttribute('height', '100%');
          this.setupPanZoom();
        }
      });
  }

  private darkenColor(color: string): string {
    const rgb = color.match(/[\da-f]{2}/gi)?.map((c) =>
      Math.max(0, parseInt(c, 16) - 50)
        .toString(16)
        .padStart(2, '0')
    );
    return `#${rgb?.join('')}`;
  }

  zoomIn() {
    const svgElement = document.getElementById('gravemap-svg');
    if (svgElement) svgPanZoom(svgElement, DEFAULT_SVG_PAN_OPTIONS).zoomIn();
  }

  zoomOut() {
    const svgElement = document.getElementById('gravemap-svg');
    if (svgElement) svgPanZoom(svgElement, DEFAULT_SVG_PAN_OPTIONS).zoomOut();
  }

  up() {
    const svgElement = document.getElementById('gravemap-svg');
    if (svgElement)
      svgPanZoom(svgElement, DEFAULT_SVG_PAN_OPTIONS).panBy({ x: 0, y: 50 });
  }

  down() {
    const svgElement = document.getElementById('gravemap-svg');
    if (svgElement)
      svgPanZoom(svgElement, DEFAULT_SVG_PAN_OPTIONS).panBy({ x: 0, y: -50 });
  }
}
