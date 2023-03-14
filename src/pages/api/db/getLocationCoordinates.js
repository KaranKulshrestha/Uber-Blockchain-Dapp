const getLocationCoordinates = async(req, res) => {
    const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${req.body.location}.json?access_token=pk.eyJ1IjoibXJrY3I3MDciLCJhIjoiY2wzN2dmbnI5MDhhdDNkcTM2YzdqdTJ1byJ9.XgdIg4Si5aPMMFXxpxfmLw`
    try {
        const response = await fetch(mapboxUrl);
        const data = await response.json()
        console.log("lol",data.features[0].center)
        res.status(200).send({ message: 'success', data: data.features[0].center })
    } catch (error) {
        res.status(500).send({ message: 'error', data: error.message })
    }
}

export default getLocationCoordinates