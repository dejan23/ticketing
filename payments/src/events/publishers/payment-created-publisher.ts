import { Subjects, Publisher, PaymentCreatedEvent } from "@ticketing13/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
