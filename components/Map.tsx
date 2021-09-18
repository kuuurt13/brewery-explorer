import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Loader, LoaderOptions } from "google-maps";
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAP_ID } from "../constants";

const options: LoaderOptions = {};

type Props = {
  lng: number;
  lat: number;
};

export default function Map({ lng, lat }: Props) {
  let loader: Loader;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadMap(element: Element) {
      loader = loader || new Loader(GOOGLE_MAPS_API_KEY, options);

      const google = await loader.load();
      const map = new google.maps.Map(element, {
        center: { lng, lat },
        mapId: GOOGLE_MAP_ID,
        zoom: 14,
        fullscreenControl: false,
        streetViewControl: false,
      });

      new google.maps.Marker({
        position: { lng, lat },
        map,
        title: "Brewery",
      });
    }

    if (ref.current && lng && lat) {
      loadMap(ref.current);
    }
  }, []);

  return <StyledMap ref={ref}></StyledMap>;
}

const StyledMap = styled.div`
  height: 60vh;
`;
