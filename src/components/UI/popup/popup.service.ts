class PopupService {
  popups: any;
  callbacks: any;

  constructor() {
    this.popups = [];
    this.callbacks = [];
  }

  open(props: any) {
    this.popups.push(props);
    this._notify();
  }

  close(id: any) {
    this.popups = this.popups.filter((popup: any) => popup.id !== id);
    this._notify();
  }

  _notify() {
    this.callbacks.forEach((callback: any) => callback(this.popups));
  }

  listen(callback: any) {
    this.callbacks.push(callback);
    return () => {
      this.callbacks = this.callbacks.filter((c: any) => c !== callback);
    };
  }
}

export const popupService = new PopupService();
