export class ResponseEntity<T> {
    message: string;
    httpStatus: number;
    demande?: T; 
  
    constructor(message: string, httpStatus: number, demande?: T) {
      this.message = message;
      this.httpStatus = httpStatus;
      this.demande = demande;
    }
  }