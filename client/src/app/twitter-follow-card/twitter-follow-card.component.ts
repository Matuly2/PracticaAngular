import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-follow-card',
  standalone: true,
  imports: [],
  templateUrl: './twitter-follow-card.component.html',
  styleUrl: './twitter-follow-card.component.css'
})
export class TwitterFollowCardComponent {
  @Input() children: string = '';
  @Input() formatUserName: (username: string) => string = username => username;
  @Input() userName: string = '';
  @Input() initialIsFollowing: boolean = false;

  isFollowing: boolean = this.initialIsFollowing;

  get text() {
    return this.isFollowing ? 'Siguiendo' : 'Seguir';
  }

  get buttonClassName() {
    return this.isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
  }

  handleClick() {
    this.isFollowing = !this.isFollowing;
  }
}