export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    _imgBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getPersonImage = ({id}) => {
        return `${this._imgBase}/characters/${id}.jpg`
    };

    getPlanetImage = ({id}) => {
        return `${this._imgBase}/planets/${id}.jpg`
    };

    getStarshipImage = ({id}) => {
        return `${this._imgBase}/starships/${id}.jpg`
    };

    getFilmImage = ({id}) => {
        return `${this._imgBase}/films/${id}.jpg`
    }

    getVehicleImage = ({id}) => {
        return `${this._imgBase}/vehicles/${id}.jpg`
    }

    getSpecieImage = ({id}) => {
        return `${this._imgBase}/species/${id}.jpg`
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    };
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    };
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };
    getAllStarships = async () => {
        const starshipsArray = await this.getResource(`/starships/`);
        return starshipsArray.results.map((starship) => this._transformStarship(starship));
    }
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };
    getAllFilms = async () => {
        const filmsArray = await this.getResource(`/films/`);
        return filmsArray.results.map(this._tranformFilm);
    }
    getFilm = async (id) => {
        const film = await this.getResource(`/films/${id}/`);
        return this._tranformFilm(film);
    }
    getAllSpecies = async () => {
        const speciesArray = await this.getResource(`/species/`);
        return speciesArray.results.map(this._transformSpecie);
    }
    getSpecie = async (id) => {
        const specie = await this.getResource(`/species/${id}`);
        return this._transformSpecie(specie);
    }
    getAllVehicles = async () => {
        const vehiclesArray = await this.getResource(`/vehicles/`);
        return vehiclesArray.results.map(this._transformVehicle);
    }
    getVehicle = async (id) => {
        const vehicle = await this.getResource(`/vehicles/${id}/`);
        return this._transformVehicle(vehicle);
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        };
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            gender: person.gender,
            hairColor: person.hair_color,
            height: person.height,
            mass: person.mass,
            skinColor: person.skin_color,
            homeworld: person.homeworld,
            films: person.films
        };
    };

    _tranformFilm = (film) => {
        return {
            id: this._extractId(film),
            name: film.title,
            episodeId: film.episode_id,
            openingCrawl: film.opening_crawl,
            director: film.director,
            producer: film.producer,
            releaseDate: film.release_date
        };
    };

    _transformVehicle = (vehicle) => {
        return {
            id: this._extractId(vehicle),
            name: vehicle.name,
            model: vehicle.model,
            vehicleClass: vehicle.vehicle_class,
            length: vehicle.length,
            costInCredits: vehicle.cost_in_credits
        };
    };

    _transformSpecie = (specie) => {
        return {
            id: this._extractId(specie),
            name: specie.name,
            classification: specie.classification,
            designation: specie.designation,
            eyeColors: specie.eye_colors
        };
    };
}
