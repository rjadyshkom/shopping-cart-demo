class PopupService {
  constructor() {
    this.popups = [];
    this.callbacks = [];
  }

  open(id, content, onRequestClose, onRequestSetSubmitState, isSubmitSuccess, disableOverlayClick) {
    this.popups.push({
      id,
      content,
      onRequestClose,
      onRequestSetSubmitState,
      isSubmitSuccess,
      disableOverlayClick,
    });
    this._notify();
  }

  close(id) {
    this.popups = this.popups.filter((popup) => popup.id !== id);
    this._notify();
  }

  _notify() {
    this.callbacks.forEach((callback) => callback(this.popups));
  }

  listen(callback) {
    this.callbacks.push(callback);
    return () => {
      this.callbacks = this.callbacks.filter((c) => c !== callback);
    };
  }
}

export const popupService = new PopupService();
