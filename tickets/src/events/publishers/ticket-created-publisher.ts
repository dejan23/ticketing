import { Publisher, Subjects, TicketCreatedEvent } from "@ticketing13/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
