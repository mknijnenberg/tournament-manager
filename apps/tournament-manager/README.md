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


## Stages

### Group Stage:

Participants are divided into groups, and each group plays a round-robin tournament among its members.
The top teams from each group usually advance to the next stage (e.g., knockout stage).

### Knockout Stage:

Also known as the elimination stage, it consists of head-to-head matches where the loser is eliminated.
Common formats include single-elimination (loser is out after one loss) and double-elimination (teams have a second chance after the first loss).

### Round Robin Stage:

Each participant plays against every other participant exactly once.
This format is common in sports like tennis and certain esports.

### Preliminary Rounds:

These are early rounds designed to filter out a large number of participants before entering more complex stages.
They may involve simple elimination matches or preliminary group stages.

### Quarterfinals, Semifinals, and Finals:

These are common stages in knockout-style tournaments, leading to the ultimate determination of a champion in the final match.

### Consolation Rounds:

In double-elimination tournaments, losers from the winners' bracket may enter consolation rounds for a chance to compete in the final.

### Playoffs:

A general term for a series of elimination matches or rounds that lead to a final winner.
Playoffs can include various stages like wild card rounds, divisional playoffs, and conference championships.

### Qualifier Rounds:

Pre-tournament rounds or matches where participants compete for a limited number of spots in the main tournament.

### Group Knockout:

Combines elements of both group stages and knockout stages.
Groups are formed, and the top teams from each group advance to a knockout stage.

### League Format:

Similar to the round-robin format but extended over a longer period.
Points are accumulated over multiple rounds, and the team with the most points is declared the winner.

### Hybrid Formats:

Some tournaments use a combination of stages to achieve a unique or desired competitive structure.
For example, a tournament might start with a group stage, followed by knockout rounds, and then revert to a group stage for the final.


## Flow

Competition manager -> Competitions -> Matches -> Scheduler -> Schedule
