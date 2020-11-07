import { Publisher, Subjects, TicketUpdatedEvent } from "@ticketing13/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
