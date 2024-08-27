# Twenty Eight
Basic implementation of the Indian card game 28. Play [here](https://anonymouseyy.github.io/twenty-eight/).

## The Process
Very fun project to build, got to work with the Firebase realtime database which was fun, but a lot of headaches compared to the traditional sockets approach. I believe I found a few clever solutions to some trickier problems :).

## How to Play 28

**Objective:**
The goal of 28 is to score points by winning tricks and playing cards strategically. The game is typically played by four players in two teams of two, but can also be played with three people.

**Game Play:**

1. **Declaration Phase:**
   - **First Deal**: Players are each dealt 4 cards.
   - **Trump Suit**: One player/team selects a trump card (stronger suit) or pass. The trump card's suit dictates which suit is most powerful. This card is not shown to the other players and placed to the side.
   - **Points Declaration**: The player/team declaring the trump also announces their expected points for the round, minimum 14, maximum 28; they are the caller.

3. **Playing Tricks:**
   - **Leading**: The person who won the last trick or the caller gets to play a card first.
   - **Following Suit**: Players must follow the suit of the leading card if possible, if not then the player may ask to reveal the trump card. If the trump card is revealed, the player may play any card, with any card of the trump suit always winning.
   - **Winning Tricks**: The trick is won by the highest card of the leading suit or the highest trump card.

4. **Scoring:**
   - **Card Points**: Points are assigned as follows:
     - Jacks: 3 points
     - Nines: 2 points
     - Tens and Aces: 1 point
     - Sevens, Eights, Queens, Kings: 0 points
     - Order (Ascending): 7, 8, Queen, King, 10, Ace, 9, Jack
   - **Trick Points**: If a player/team wins the trick, they gain an amount of points equal to the sum of all the cards in the trick they have won.

5. **Winning the Game:**
   - **Round Points**: Once everyone runs out of cards, if the caller achieved the amount of points they declared at the beginning, they receive one chip from every other player; otherwise they give every other player a chip.

**Strategy Tips:**
- **Card Management**: Use high-value and trump cards strategically.
- **Memory**: Track played cards to anticipate opponents’ hands.

28 combines strategic play with teamwork, making it an engaging card game.

---

The rules of 28 may vary by region. This is the version taught to me by my friends :)

Playing cards from [WebDevSimplified](https://github.com/WebDevSimplified/css-deck-of-cards).
