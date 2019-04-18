package model;

public class Quiz {
    private int currentIndex = 0;
    private int score = 0;
    public int getCurrentIndex(){
        return currentIndex;
    }
    public void setCurrentIndex(int currentIndex){
        this.currentIndex = currentIndex;
    }

    public int getScore(){
        return score;
    }
    public void setScore(int score){
        this.score = score;
    }

    private static String[] questions = {
            "3, 1, 4, 1, 5",  // pi
            "1, 1, 2, 3, 5",  // fibonacci
            "1, 4, 9, 16, 25", // squares
            "2, 3, 5, 7, 11",  // primes
            "1, 2, 4, 8, 16"  // powers of 2
    };

    private static int[] answers = {
            9, 8, 36, 13, 32
    };

    public static boolean controlAnswer(int index, int answer){
        return answers[index] == answer;
    }

    public static String[] getQuestions(){
        return questions;
    }

}
