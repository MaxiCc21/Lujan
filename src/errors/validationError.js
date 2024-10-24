class AutError extends Error {
  constructor() {
    super(error.message);

    this.name = "validataion Error";
    this.status = 400;
    this.path = error.path;
  }

  toJson() {
    return {
      name: this.name,
      status: this.status,
      message: this.message,
      path: this.path,
    };
  }
}

module.exports = AutError;
