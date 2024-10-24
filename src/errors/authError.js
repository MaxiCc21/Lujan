class AutError extends Error {
  constructor() {
    super("No tines los permisos necesario para ingresar");

    this.name = "AuthError";
    this.status = 403;
  }

  toJson() {
    return {
      name: this.name,
      status: this.status,
      message: this.message,
    };
  }
}

module.exports = AutError;
