# Tournament Manager

## Description

This is a tournament manager for a Swiss-system tournament. It uses a PostgreSQL database to store players and matches, and a Python module to rank players and pair them up in matches.

## Flow

1. Create a database with the `tournament.sql` file.

Competition
- Contains the startData

Match
- Contains the matchData
- Contains the matchResult
- Contains the matchAlgorithm
- Contains the matchSchedule (combination with Scheduler)

Scheduler
- Contains the scheduleData.
- Favorite days of the week.
- Favorite timeframe of a day.
- Contains the scheduleAlgorithm.
- Contains the scheduleResult.



## Documentation

[Wiki Competition](https://en.wikipedia.org/wiki/Competition#Sports)

[Championship](https://en.wikipedia.org/wiki/Championship)

[Tournament](https://en.wikipedia.org/wiki/Tournament)

[Swiss System Tournament](https://en.wikipedia.org/wiki/Swiss-system_tournament)
