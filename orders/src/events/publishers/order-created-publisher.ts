import { Publisher, OrderCreatedEvent, Subjects } from "@ticketing13/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
