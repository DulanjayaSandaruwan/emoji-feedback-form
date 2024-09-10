import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private emojiRatings: Array<EmojiRating> = [
    {
      id: '1',
      emojiName: 'Angry',
      emojiIcon: '../assets/images/emojis/image_1.svg',
      rating: 1
    },
    {
      id: '2',
      emojiName: 'Sad',
      emojiIcon: '../assets/images/emojis/image_2.svg',
      rating: 2
    },
    {
      id: '3',
      emojiName: 'Neutral',
      emojiIcon: '../assets/images/emojis/image_3.svg',
      rating: 3
    },
    {
      id: '4',
      emojiName: 'Happy',
      emojiIcon: '../assets/images/emojis/image_4.svg',
      rating: 4
    },
    {
      id: '5',
      emojiName: 'Surprised',
      emojiIcon: '../assets/images/emojis/image_5.svg',
      rating: 5
    }
  ]

  constructor() { }

  getEmojiRatings(): Array<EmojiRating> {
    return this.emojiRatings;
  }
}

export interface EmojiRating {
  id: string;
  emojiName: string;
  emojiIcon: string;
  rating: number;
}