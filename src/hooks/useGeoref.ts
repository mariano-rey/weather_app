import { useEffect, useState } from "react";

interface IGeoref {
  isGeorefEnabled: boolean;
  position: { lat: number; lng: number } | null;
}

const intialsState: IGeoref = {
  isGeorefEnabled: false,
  position: null,
};

export default (): IGeoref => {
  const [georef, setGeoref] = useState<IGeoref>(intialsState);

  useEffect(() => {
    if (!georef.isGeorefEnabled && !georef.position)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeoref({
            isGeorefEnabled: true,
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }, [georef]);

  return georef;
};
