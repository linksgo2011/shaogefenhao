class BaseClass {
    protected String name;
    public BaseClass() { this("Hey"); }
    private BaseClass(String name) { this.name = name; }
    public String getName() { return name; }
}

class DerivedClass extends BaseClass {
    public DerivedClass() { name += " Guys!"; }
}

