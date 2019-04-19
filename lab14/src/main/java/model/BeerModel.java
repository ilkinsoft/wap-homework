package model;

import java.util.ArrayList;
import java.util.List;

public class BeerModel {

    public List<String> getBrands(String color) {
        if (color == null || color.trim().isEmpty()) {
            return new ArrayList<>();
        }
        List<String> result = new ArrayList<>();
        if (color.equals("amber")) {
            result.add("Jack Amber");
            result.add("Red Moose");
        } else {
            result.add("Jail Pale Ale");
            result.add("Gout Stout");
        }
        return result;
    }
}
