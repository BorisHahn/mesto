class Section {
  constructor(data, selector) {
    this._renderer = data.renderer;
    this._cardsContainer = document.querySelector(selector);
  }
  
  addItem(item) {
    this._cardsContainer.prepend(this._renderer(item));
  }

  rendererCards(cards) {
    cards.forEach((item) => {
      this.addItem(item);
    });
  }
}

export default Section;