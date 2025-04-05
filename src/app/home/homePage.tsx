"use client";
import { Container } from "@mui/material";
import { RouteCard } from "../components/routeCard";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { ROUTES } from "../routes";

export default function HomePage() {

  const router = useRouter();

  const handleCardClick = (route: string) => {
    console.log(`Navigating to ${route}`); 
    router.push(route)
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid size={6}>
          <RouteCard title="First" onClick={() => handleCardClick(ROUTES.layout1)}/>
        </Grid>
        <Grid size={6}>
          <RouteCard title="Second" onClick={() => handleCardClick("/second")}/>
        </Grid>
        <Grid size={6}>
          <RouteCard title="Third" onClick={() => handleCardClick("/third")}/>
        </Grid>
        <Grid size={6}>
          <RouteCard title="Fourth" onClick={() => handleCardClick("/fourth")}/>
        </Grid>
      </Grid>
    </Container>
  );
}