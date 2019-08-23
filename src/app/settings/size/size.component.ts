<ActionBar class="action-bar">
    <!-- 
    Use the NavigationButton as a side-drawer button in Android
    because ActionItems are shown on the right side of the ActionBar
    -->
    <NavigationButton ios:visibility="collapsed" icon="res://menu" (tap)="onDrawerButtonTap()"></NavigationButton>
    <!-- 
    Use the ActionItem for IOS with position set to left. Using the
    NavigationButton as a side-drawer button in iOS is not possible,
    because its function is to always navigate back in the application.
    -->
    <ActionItem icon="res://navigation/menu" android:visibility="collapsed" (tap)="onDrawerButtonTap()"
        ios.position="left">
    </ActionItem>
    <Label class="action-bar-title" text="Size Settings"></Label>
</ActionBar>
<StackLayout sdkExampleTitle sdkToggleNavButton>
    <GridLayout rows="auto *">
        <SearchBar row="0" [hint]="searchBarHint" (clear)="onClear($event)" (textChange)="onTextChange($event)">
        </SearchBar>

        <ListView row="1" [items]="sizeList | filter:searchText:'name'" class="list-group">
            <ng-template let-item="item" let-i="index" let-odd="odd" let-even="even">
                <StackLayout orientation="horizontal" class="list-group-item" [class.odd]="odd" [class.even]="even">
                    <Label [text]="item.name" textWrap="true"></Label>
                    <Label text=" ({{item.unit}})"></Label>
                    <Button class="btn" pageTransition="slide" text="&#xf044;" (tap)="editItem(item)"></Button>
                </StackLayout>
            </ng-template>
        </ListView>


        <AbsoluteLayout verticalAlignment="bottom" horizontalAlignment="right" row="1">
            <Button class="btn btn-primary m-5 fa btn-rounded-lg" [nsRouterLink]="['/settings/size/edit']"
                pageTransition="slide" text="&#xf067;"></Button>
        </AbsoluteLayout>
    </GridLayout>
</StackLayout>