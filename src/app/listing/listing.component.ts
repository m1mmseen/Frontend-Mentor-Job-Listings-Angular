import { Component, OnInit } from '@angular/core';
import {Job} from "../job";
import {Jobs} from "./mock-listings";
import {elementAt} from "rxjs";


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
    listings: Job[] = []
    filteredListings: Job[] = [];
    filters : String[] = [];
    currentListing: Job[] = [];


    constructor() {
      this.listings = Jobs;
      this.filteredListings = this.listings
      this.currentListing = this.listings.filter(element => element.level.includes("Junior"));
    }

    addFilter(filter : String) {
      let clickedFilter = this.filters.find((element) => element === filter);
      if (clickedFilter === undefined) {
        this.filters.push(filter);
      }

      this.filteredListings = this.filteredListings = this.listings.filter(element => this.filters.every((i) => element.languages.includes(i) || element.tools.includes(i) || element.level === i  || element.role === i ));
    }

    removeFilter(filter: String) {
      let clickedFilter = this.filters.find((element) => element === filter);
      if (clickedFilter != undefined) {
        this.filters = this.filters.filter((filter) => filter != clickedFilter);
      }
      if (this.filters.length > 0) {
        this.filteredListings = this.listings.filter(element => this.filters.every((i) => element.languages.includes(i) || element.tools.includes(i) || element.level === i  || element.role === i ));
      } else {
        this.filteredListings = this.listings;
      }
    }

    removeAllFilters() {
      this.filters =[];
      this.filteredListings = this.listings;
    }

    filterListings(filter : String) {
      this.filteredListings = this.filteredListings.filter(element => this.filters.every((i) => element.languages.includes(i) || element.tools.includes(i)));
    }

    filterListingsRoleOrLevel(filter : String, role :boolean) {
      if (role) {
        this.filteredListings = this.filteredListings.filter(element => this.filters.includes(element.role));
      } else {
        this.filteredListings = this.filteredListings.filter(element => this.filters.includes(element.level));
      }
    }




}
