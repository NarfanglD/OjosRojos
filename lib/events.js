EventsSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Event Name"
	},
  eventStart: {
    type: Date,
    label: "Date Start"
  },
  eventEnd: {
    type: Date,
    label: "Date End"
  }
})