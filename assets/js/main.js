var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

class Modal {
  constructor(id) {
    this.id = id;
    this.opening = false;
    this.getElement();
    this.getListeners();
    this.listen();
  }

  getElement() {
    this.overlay = $(`#${this.id} .overlay`);
    this.el = $(`#${this.id}`);
  }

  getListeners() {
    this.listeners = $$(`*[open-modal=true][modal-target=${this.id}]`);
  }

  close() {
    this.el.style.display = 'none';
  }

  open() {
    this.el.style.display = 'block';
  }

  toggle() {
    if (this.opening) this.close();
    else this.open();

    this.opening = !this.opening;
  }

  listen() {
    this.listeners.forEach((el) => {
      el.onclick = (e) => {
        e.preventDefault();
        this.toggle();
      };
    });

    this.overlay.onclick = (e) => this.close();
  }
}

new Modal('modal1');
