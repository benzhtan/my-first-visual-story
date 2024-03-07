homicides.forEach((obj) => {
  L.circleMarker([obj.latitude, obj.longitude])
    .addTo(map)
    .bindTooltip(obj.first_name + ' ' + obj.last_name, { permanent: true }); // ... with a tooltip
});
