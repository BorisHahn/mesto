class Section {
  constructor(data, selector) {
    this._items = data.items;
    this._renderer = data.renderer;
    this._cardsContainer = document.querySelector(selector);
  }
  setItems(items) {
    this._items = items;
  }

  addItem(item) {
    this._cardsContainer.prepend(this._renderer(item));
  }

  rendererCards() {
    this._items.forEach((item) => {
      this.addItem(item);
    });
  }
}

export default Section;