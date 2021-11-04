# Write out your process here

# Class Hierarchy:
- Dancer: steps
  - BlinkyDancer: blinks each step
    - RainbowDancer: changes color each step (CSS filter rotate-hue)
  - Angry Dancer: on mouseover, turn red and shake
  - Butterfly Dancer: Flies around between other dancers

# Movement Functions
## Line Up Functionality
### Problem Decomposition
- A button
  - When clicked:
    - Tells all dancers to line up against one side
  - Use the global array of all created dancers

### Approach
- Original position of each dancer is determined by the top and left CSS properties
- Implement a `moveTo` helper function on the dancer class
  - If the dancer object has a defined `targetTop` and `targetLeft`, take the shortest path toward those targets
- Dancers choose their target positions based on the size of the window divided by the number of dancers, so they are evenly spaced
- Add `inFormation` boolean to stop other movement behaviors while in a special formation

## Disperse
- After the dancers are lined up, we want them to go back out on the dance floor
- Loop over the array of dancers and assign them a random position similar to when they are first generated

## Conga
- Similar behavior to `lineup` but horizontally oriented
- Take the number of dancers and count the number of spaces between them
- Divide the screen width by the number of spaces to get the width of the space
- Thus the dancers will be evenly spread across the screen
- Edge cases for zero or 1 dancer
  - 1 dancer goes to the center of the screen
  - 0 dancers do nothing
