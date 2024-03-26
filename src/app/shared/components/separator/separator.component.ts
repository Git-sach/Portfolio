import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { SeparatorAsset } from '../../interfaces/separatorAsset.interface';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css'],
})
export class SeparatorComponent implements AfterViewInit {
  @ViewChild('mask') mask: ElementRef | undefined;
  @ViewChild('leftSeparator') leftSeparator: ElementRef | undefined;
  @ViewChild('rightSeparator') rightSeparator: ElementRef | undefined;
  @ViewChild('triangle') triangle: ElementRef | undefined;

  @Input('asset') asset: SeparatorAsset = {
    colorTop: '#fafbfc',
    shadowOpacity: 0.1,
  };

  ngAfterViewInit(): void {
    this.mask!.nativeElement.style.backgroundColor = this.asset.colorTop;
    this.triangle!.nativeElement.style.borderTop = `${this.asset.colorTop} solid 10px`;
    this.triangle!.nativeElement.style.filter = `drop-shadow(0px 1px 5px rgba(0, 0, 0, ${this.asset.shadowOpacity}))`;
    this.leftSeparator!.nativeElement.style.filter = `drop-shadow(0px 1px 5px rgba(0, 0, 0, ${this.asset.shadowOpacity}))`;
    this.rightSeparator!.nativeElement.style.filter = `drop-shadow(0px 1px 5px rgba(0, 0, 0, ${this.asset.shadowOpacity}))`;
  }
}
