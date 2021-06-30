import { useEffect } from "react";
import Header from "../../../components/Header";
import EventCard from "../../../components/EventCard";
import UserLayout from "../../../components/UserLayout";
import { useEvents } from "../../../Hooks/useEvents";
import { useAuth } from "../../../Hooks/useAuth";

import { Container } from "./styles";
// Change EventCard to EventList Component

export default function UserEvents() {
  const { userEvents, fetchUserEvents } = useEvents();
  const { user } = useAuth();

  console.log("aaa",user,"n")
  useEffect(() => {
    fetchUserEvents(user.id , user.events);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("aaa",userEvents,"n")

  return (
    <UserLayout>
      <Header type="user" />
      <Container>
        {userEvents.map((event) => (
          <EventCard
            image={event.image}
            key={event.id}
            id={event.id}
            name={event.eventName}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
            btn1={"Ticket"}
            btn2={"Unsubscribe"}
          ></EventCard>
        ))}
      </Container>
    </UserLayout>
  );
}
